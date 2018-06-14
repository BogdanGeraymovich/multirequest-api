import glob from "glob-promise";

export default class FileLoader {
  constructor(directory) {
    this.directory = directory;
  }

  loadFiles() {
    return glob(`${this.directory}/**/*.js`);
  }
}