const express = require("express");
const app = express();
app.use(express.json());
function userMiddleware(req, res, next) {
	if (
		!(req.headers.username === "Rishi" && req.headers.password === "Pass123")
	) {
		res.send({
			msg: "Input are wrong!",
		});
	} else {
		next();
	}
}

function inputMiddleware(req, res, next) {
	if (!(req.body.name === "Rishi" && req.body.phone === 321)) {
		res.send({ msg: "Input are wrong" });
	} else {
		next();
	}
}

app.post("/middleware", userMiddleware, inputMiddleware, (req, res) => {
	res.json({ msg: "middleware working fine beautifully!!!" });
});

app.listen(3000);