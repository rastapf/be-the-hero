const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ngos_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ngos_id', ngos_id)
            .select('*');

        return res.json(incidents);
    }
}