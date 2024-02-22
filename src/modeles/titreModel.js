const db = require('../config/db');

const getTitres = (type_titre, page, callback) => {
    const offset = (page - 1) * 10;
    const showType = type_titre === 'film' ? 'Movie' : 'TV Show'; // Convertit le type_titre en valeur correspondante dans la BD
    db.query(
      'SELECT show_id, title FROM netflix_titles WHERE show_type = ? LIMIT 10 OFFSET ?', 
      [showType, offset], 
      callback
    );
  };
  

module.exports = { getTitres };
