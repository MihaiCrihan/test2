const ListController = require('../../controllers/list')

module.exports = (app) => {
  /**
   * RETERTRETRETERTERTRETRETERTRET
   * @route GET /getAll
   * @group get - что то про этот роут
   * @returns {object} 200 - Массив с какой то хуетой
   * @returns {Error}  default - Unexpected error
   */
  app.get('/getAll', [
    ListController.getAll
  ])


  /**
   * This function comment is parsed by doctrine
   * @route GET /getId/{id}
   * @group get - что то про этот роут
   * @param {string} id.path.required - idska
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.get('/getId/:id', [
    ListController.get
  ])

  /**
   * @typedef Produs
   * @property {string} denumire.required
   * @property {integer} pret.required
   */

  /**
   * This function comment is parsed by doctrine
   * @route POST /postNew
   * @group get - что то про этот роут
   * @param {Produs.model} body.body.required - the new produs
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.post('/postNew', [
    ListController.post
  ])

  /**
   * This function comment is parsed by doctrine
   * @route PUT /post/{id}
   * @group get - что то про этот роут
   * @param {string} id.path.required - idska
   * @param {Produs.model} body.body.required - the new produs
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.put('/post/:id', [
    ListController.put
  ])

  /**
   * This function comment is parsed by doctrine
   * @route PATCH /patch/{id}
   * @group get - что то про этот роут
   * @param {string} id.path.required - idska
   * @param {Produs.model} body.body.required - the new produs
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.patch('/patch/:id', [
    ListController.patch
  ])

  /**
   * This function comment is parsed by doctrine
   * @route DELETE /removeById/{id}
   * @group get - что то про этот роут
   * @param {string} id.path.required - idska
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.delete('/removeById/:id', [
    ListController.delete
  ])
}
