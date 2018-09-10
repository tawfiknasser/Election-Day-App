const app = require("./app");
const port = process.env.PORT || "3000";
app.set("port", port);

app.listen(port);
