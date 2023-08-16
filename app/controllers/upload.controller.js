const {
  findUserAndUpdateHelper,
  findUserHelper
} = require("../helpers/userHelper");
const {
  authenticationHelper,
  adminAuthenticationHelper
} = require("../helpers/authenticationHelper");

const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

const uploadFile = async (req, res, next) => {
  const {
    file,
    body: { email, type }
  } = req;
  if (type === "avatar") {
    authenticationHelper(req, res, next, { session: false }, "jwt", user => {
      if (file.detectedFileExtension.toLowerCase() != ".jpg") {
        return res.status(500).send("Only .jpg/.jpeg files allowed");
      }
      if (file.size >= 1000000) {
        return res.status(500).send("File size must be less than 1MB");
      }
      deleteFileIfExists(res, file, type, user.email);
    });
  } else if (type === "report") {
    adminAuthenticationHelper(req, res, next, () => {
      if (file.detectedFileExtension.toLowerCase() != ".pdf") {
        return res.status(500).send("Only .pdf files allowed");
      }
      if (file.size >= 3000000) {
        return res.status(500).send("File size must be less than 3MB");
      }
      deleteFileIfExists(res, file, type, email);
    });
  }
};

const deleteFileIfExists = (res, file, type, email) => {
  findUserHelper(res, { email: email }, user => {
    if (user[type] !== undefined || user[type] !== "") {
      fs.unlink(
        `${process.env.FILE_STORAGE_PATH}/${type}/${user[type]}`,
        () => {
          writeFileAndUpdateUser(res, file, type, email);
        }
      );
    } else {
      writeFileAndUpdateUser(res, file, type, email);
    }
  });
};

const writeFileAndUpdateUser = async (res, file, type, email) => {
  const filename =
    Math.floor(Math.random() * 900000000) + file.detectedFileExtension;
  await pipeline(
    file.stream,
    fs.createWriteStream(`${process.env.FILE_STORAGE_PATH}/${type}/${filename}`)
  );
  let data = {};
  data[type] = filename;
  findUserAndUpdateHelper(res, { email: email }, data, user => {
    if (type === "avatar") {
      return res.status(200).send({
        message: filename
      });
    } else {
      return res.status(200).send({
        message: `${type.substr(0, 1).toUpperCase()}${type.substr(1)} uploaded`
      });
    }
  });
};

const downloadFile = (req, res) => {
  let file_path = `${process.env.FILE_STORAGE_PATH}/${req.query.type}/${req.query.name}`;
  let contentType =
    req.query.type === "avatar" ? "image/jpg" : "application/pdf";
  res.writeHead(200, { "content-type": contentType });
  fs.createReadStream(file_path).pipe(res);
};

module.exports = {
  uploadFile,
  downloadFile
};
