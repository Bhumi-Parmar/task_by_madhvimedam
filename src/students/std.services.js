const students = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 2,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

const getData = (req, resp) => {
  resp.send({ students });
};

const postData = (req, resp) => {
  if (!req.body.title) {
    resp.status(400);
    return resp.json({ error: "titile is wrong.." });
  }

const user = {
    userId: students.length + 1,
    title: req.body.title,
    body: req.body.body,
  };
  students.push(user);
  resp.json(user);
};

const putData = (req, resp) => {
  let userId = resp.userId;
  let title = req.title;
  let body = req.body;

  let index = students.findIndex((student) => {
    return student.userId == Number.parseInt(userId);
  });
  console.log(index);
  if (index >= 0) {
    return (std = students[index]);
    std.title = title;
    std.body = body;
  } else {
    resp.status(404);
    return resp.json({ error: "erroe.." });
  }
};

const delData = (req) => {
  console.log(req);
  let userId = req.userId;
  let index = students.findIndex((student) => {
    return student.userId == Number.parseInt(userId);
  });

  if (index >= 0) {
    return (std = students[index]);
    students.splice(index, 1);
  } else {
    return resp.status(404);
  }
};
export default { postData, putData, delData, getData };
