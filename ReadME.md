#todoapp
this project contains a simple todo applicaiton it has following feature
-anyone can create a todo.
-anyone can make thier existing todos.
-anyone can mark a todo as done.

#initilize a node prject
-put a package.json.
-it contains all the list of the dependnecies and if u send someone yr code u dont share node modules .just by doing npm install all ddependies written in express.json will be installed in node modules.
-npm init -y

#NPM INSTALL EXPRESS
-dependencies will added in the package.json

#NPM INSTALL JSONWEBTOKEN

#4 write basic express boilerplate code.

#5 zod for validation.
-npm install zod

expected from user .
//body {
// title: string,
// description: string;
//}

#6 adding validation
app.post("/", function (req, res) {
const createPayload = req.body;
const parsedPayload = createTodo.safeParse(createPayload);
if (!parsedPayload.success) {
res.status(411).json({
msg: "you sent wrong inputs",
});
return;
}

#7 creating the mongodb schema .
