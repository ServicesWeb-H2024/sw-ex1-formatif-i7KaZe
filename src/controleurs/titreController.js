const titreModel = require('../modeles/titreModel');

const getTitres = (req, res) => {
  const { type_titre } = req.params;
  let { page } = req.query;
  page = parseInt(page) || 1;

  if (!['film', 'serie'].includes(type_titre)) {
    return res.status(400).json({ erreur: `Le type ${type_titre} est invalide` });
  }

  titreModel.getTitres(type_titre, page, (error, titres) => {
    if (error) return res.status(500).json({ erreur: "Erreur serveur" });

    const url_page_suivante = titres.length < 10 ? null : `/api/titres/${type_titre}?page=${page + 1}`;

    res.json({
      titres,
      filtre: type_titre,
      page,
      url_page_suivante
    });
  });
};

module.exports = { getTitres };
