class MateriaController {
    constructor(materiaModel) {
        this.materiaModel = materiaModel;
    }

    async createMateria(req, res) {
        try {
            const materia = await this.materiaModel.create(req.body);
            res.status(201).json(materia);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllMaterias(req, res) {
        try {
            const materias = await this.materiaModel.findAll();
            res.status(200).json(materias);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getMateriaById(req, res) {
        try {
            const materia = await this.materiaModel.findByPk(req.params.id);
            if (materia) {
                res.status(200).json(materia);
            } else {
                res.status(404).json({ message: 'Materia not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateMateria(req, res) {
        try {
            const [updated] = await this.materiaModel.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedMateria = await this.materiaModel.findByPk(req.params.id);
                res.status(200).json(updatedMateria);
            } else {
                res.status(404).json({ message: 'Materia not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteMateria(req, res) {
        try {
            const deleted = await this.materiaModel.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Materia not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = MateriaController;