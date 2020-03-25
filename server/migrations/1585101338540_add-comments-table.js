exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('comments', {
    id: {
      type: 'serial',
      primaryKey: true,
    },
    user_id: {
      type: 'integer',
      notNull: true,
      references: '"users"',
    },
    post_id: {
      type: 'integer',
      notNull: true,
      references: '"posts"',
    },
    comment: {
      type: 'text',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {

};