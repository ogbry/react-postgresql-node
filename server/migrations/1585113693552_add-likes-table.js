exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('likes', {
    id: {
      type: 'serial',
      primaryKey: true,
    },
    user_id: {
      type: 'text',
      notNull: true,
      references: '"users"',
    },
    post_id: {
      type: 'integer',
      notNull: true,
      references: '"posts"',
    }
  });
};

exports.down = (pgm) => {

};