/* eslint-disable camelcase */
exports.shorthands = undefined;
exports.up = pgm => {
    pgm.createTable('followers', {
        follow_id: {
            type: 'serial',
            primaryKey: true
        },
        follower_id: {
            type: 'integer',
            notNull: true,
            references: '"users"',
            onDelete: 'cascade'
        },
        following_id: {
            type: 'integer',
            notNull: true,
            references: '"users"',
            onDelete: 'cascade'
        }
    });
};
exports.down = pgm => {};