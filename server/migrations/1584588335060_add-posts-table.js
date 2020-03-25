/* eslint-disable camelcase */
exports.shorthands = undefined;
exports.up = pgm => {
  pgm.createTable("posts", {
    id: {
      type: "serial",
      primaryKey: true
    },
    text: {
      type: "text",
      notNull: true
    },
    date_created: {
      type: "text",
      notNull: true
    },
    user_id: {
      type: "text",
      notNull: true,
      references: '"users"'
    }
  });
};
exports.down = pgm => {};
