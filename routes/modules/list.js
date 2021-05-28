const ListController = require('../../controllers/list')

module.exports = (app) => {
  /**
   * @typedef Produs
   * @property {string} denumire.required
   * @property {integer} pret.required
   */

  /**
   * @route GET /getAll
   * @group get - Face get query si pimeste tot continutul
   * @returns {object} 200 - Daca totul este realizat cu succes intoarce toate datele
   * @returns {Error}  default - Oupssss ceva nu a mers bine
   */
  app.get('/getAll', [
    ListController.getAll
  ])


  /**
   * @route GET /getId/{id}
   * @group get - Get Query care primeste informatia despre o inregistrare
   * @param {string} id.path - Introduceti un Id
   * @returns {object} 200 - Returneaza datele despre un produs
   * @returns {Error}  default - Oupssss ceva nu a mers bine
   */
  app.get('/getId/:id', [
    ListController.get
  ])


  /**
   * @route POST /postNew
   * @group post - Incarca o informatie noua conform modelului
   * @param {Produs.model} body.body - the new produs
   * @returns {object} 200 - Returneaza datele despre un produs
   * @returns {Error}  default - Oupssss ceva nu a mers bine
   */
  app.post('/postNew', [
    ListController.post
  ])


  /**
   * @route PATCH /patch/{id}
   * @group patch - modifica o inserare dorita introductind id-ul produsului
   * @param {string} id.path.required - Introduceti un Id
   * @param {Produs.model} body.body - Produsul nou care va fi inserat
   * @returns {object} 200 - Daca totul este realizat cu succes intoarce datele produsului
   * @returns {Error}  default - Oupssss ceva nu a mers bine
   */
  app.patch('/patch/:id', [
    ListController.patch
  ])

  /**
   * @route DELETE /removeById/{id}
   * @group delete - sterge inserarea dorita
   * @param {string} id.path.required - Introduceti un Id ex 7
   * @returns {object} 200 - Inserarea a fost stearsa cu succes
   * @returns {Error}  default - Oupssss ceva nu a mers bine
   */
  app.delete('/removeById/:id', [
    ListController.delete
  ])
}
