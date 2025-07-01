class NotaController {
    constructor(notaModel) {
        this.notaModel = notaModel;
    }

    async createNota(req, res) {
        try {
            const nota = await this.notaModel.create(req.body);
            res.status(201).json(nota);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getNotas(req, res) {
        try {
            const notas = await this.notaModel.findAll();
            res.status(200).json(notas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getNotaById(req, res) {
        try {
            const nota = await this.notaModel.findByPk(req.params.id);
            if (!nota) {
                return res.status(404).json({ error: 'Nota not found' });
            }
            res.status(200).json(nota);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateNota(req, res) {
        try {
            const [updated] = await this.notaModel.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                return res.status(404).json({ error: 'Nota not found' });
            }
            const updatedNota = await this.notaModel.findByPk(req.params.id);
            res.status(200).json(updatedNota);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteNota(req, res) {
        try {
            const deleted = await this.notaModel.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                return res.status(404).json({ error: 'Nota not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = NotaController;