const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 7700;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.html"));
});

app.get("/clients", (req, res) => {
  fs.readFile("clients.json", "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") return res.json([]); // If file doesn't exist, return empty array
      return res.status(500).send("Error reading clients.json");
    }
    res.type("json").send(data);
  });
});

app.post("/welcome.html", (req, res) => {
  const client = {
    name: req.body.name,
    mobile: req.body.mobile,
    address: req.body.address,
    email: req.body.email,
  };

  fs.readFile("clients.json", "utf8", (err, data) => {
    let clients = [];
    if (!err) {
      try {
        clients = JSON.parse(data);
      } catch (parseErr) {
        console.error("Error parsing clients.json:", parseErr);
      }
    }

    clients.push(client);

    fs.writeFile(
      "clients.json",
      JSON.stringify(clients, null, 2),
      (writeErr) => {
        if (writeErr) return res.status(500).send("Error saving client data.");

        // Load welcome.html and replace placeholders
        fs.readFile(
          path.join(__dirname, "public", "welcome.html"),
          "utf8",
          (err, welcomeHTML) => {
            if (err) return res.status(500).send("Error loading welcome page.");

            const page = welcomeHTML
              .replace(/{name}/g, client.name)
              .replace(/{mobile}/g, client.mobile)
              .replace(/{address}/g, client.address)
              .replace(/{email}/g, client.email);

            res.send(page);
          }
        );
      }
    );
  });
});

app.delete("/clients/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);

  fs.readFile("clients.json", "utf8", (err, data) => {
    if (err && err.code === "ENOENT")
      return res.status(404).send("No clients found.");
    if (err) return res.status(500).send("Error reading file.");

    let clients = JSON.parse(data);

    if (index < 0 || index >= clients.length) {
      return res.status(400).send("Invalid client index.");
    }

    clients.splice(index, 1);

    fs.writeFile(
      "clients.json",
      JSON.stringify(clients, null, 2),
      (writeErr) => {
        if (writeErr) return res.status(500).send("Error saving changes.");
        res.status(200).send("Client deleted successfully.");
      }
    );
  });
});

app.put("/clients/:index", express.json(), (req, res) => {
  const index = parseInt(req.params.index);

  fs.readFile("clients.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading clients.json");

    let clients = JSON.parse(data);
    if (index < 0 || index >= clients.length) {
      return res.status(404).send("Client not found");
    }

    clients[index] = req.body;

    fs.writeFile(
      "clients.json",
      JSON.stringify(clients, null, 2),
      (writeErr) => {
        if (writeErr)
          return res.status(500).send("Error saving updated client.");
        res.status(200).json({ message: "Client updated successfully" });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`✅ Express server running at http://localhost:${PORT}/`);
});
