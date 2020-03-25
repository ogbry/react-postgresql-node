/* eslint-disable camelcase */
exports.shorthands = undefined;
exports.up = pgm => {
  pgm.createTable("users", {
    id: {
      type: "serial",
      primaryKey: true
    },
    firstname: {
      type: "text",
      notNull: true
    },
    lastname: {
      type: "text",
      notNull: true
    },
    email: {
      type: "text",
      notNull: true
    },
    avatar: {
      type: "text",
      notNull: true
    }
  });
};
exports.down = pgm => {};