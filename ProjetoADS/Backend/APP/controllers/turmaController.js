class TurmaController {
    constructor(Turma) {
        this.Turma = Turma;
    }

    async createTurma(req, res) {
        try {
            const turma = await this.Turma.create(req.body);
            res.status(201).json(turma);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllTurmas(req, res) {
        try {
            const turmas = await this.Turma.findAll();
            res.status(200).json(turmas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getTurmaById(req, res) {
        try {
            const turma = await this.Turma.findByPk(req.params.id);
            if (!turma) {
                return res.status(404).json({ error: 'Turma not found' });
            }
            res.status(200).json(turma);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateTurma(req, res) {
        try {
            const [updated] = await this.Turma.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated) {
                return res.status(404).json({ error: 'Turma not found' });
            }
            const updatedTurma = await this.Turma.findByPk(req.params.id);
            res.status(200).json(updatedTurma);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteTurma(req, res) {
        try {
            const deleted = await this.Turma.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                return res.status(404).json({ error: 'Turma not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = TurmaController;