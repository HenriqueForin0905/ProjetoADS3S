class AlunoController {
    constructor(alunoModel) {
        this.alunoModel = alunoModel;
    }

    async createAluno(req, res) {
        try {
            const alunoData = req.body;
            const newAluno = await this.alunoModel.create(alunoData);
            res.status(201).json(newAluno);
        } catch (error) {
            res.status(500).json({ message: 'Error creating aluno', error });
        }
    }

    async getAlunos(req, res) {
        try {
            const alunos = await this.alunoModel.findAll();
            res.status(200).json(alunos);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving alunos', error });
        }
    }

    async getAlunoById(req, res) {
        try {
            const { id } = req.params;
            const aluno = await this.alunoModel.findByPk(id);
            if (aluno) {
                res.status(200).json(aluno);
            } else {
                res.status(404).json({ message: 'Aluno not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving aluno', error });
        }
    }

    async updateAluno(req, res) {
        try {
            const { id } = req.params;
            const alunoData = req.body;
            const [updated] = await this.alunoModel.update(alunoData, { where: { id } });
            if (updated) {
                const updatedAluno = await this.alunoModel.findByPk(id);
                res.status(200).json(updatedAluno);
            } else {
                res.status(404).json({ message: 'Aluno not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating aluno', error });
        }
    }

    async deleteAluno(req, res) {
        try {
            const { id } = req.params;
            const deleted = await this.alunoModel.destroy({ where: { id } });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Aluno not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting aluno', error });
        }
    }
}

module.exports = AlunoController;
