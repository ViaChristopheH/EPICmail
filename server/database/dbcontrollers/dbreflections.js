import query from '../modelsindex';


const user = {
    async createUser(req, res) {
      const text = `INSERT INTO
        usersTable(
            id, 
            email, 
            password, 
            first_name, 
            last_name, 
            )
        VALUES($1, $2, $3, $4)
        returning *`;
      
        const inputs = [
        req.body.id,
        req.body.email,
        req.body.first_name,
        req.body.last_name    
      ];
  
      try {
        const { rows } = await db.query(text, inputs);
        return res.status(201).json(rows[0]);
      } catch(error) {
        return res.status(400).send(error);
      }
    },
    
    async getAllQuery(req, res) {
      const findAllQuery = 'SELECT * FROM usersTable';
      try {
        const { rows } = await db.query(findAllQuery);
        return res.status(200).json({ rows, rowCount });
      } catch(error) {
        return res.status(400).json(error);
      }
    },
    
    async getAspecificQuery(req, res) {
      const text = 'SELECT * FROM usersTable WHERE id = $1';
      try {
        const { rows } = await db.query(text, [req.params.id]);
        if (!rows[0]) {
          return res.status(404).json({'message': 'user not found'});
        }
        return res.status(200).json(rows[0]);
      } catch(error) {
        return res.status(400).json(error)
      }
    },
    
    async updateQuery(req, res) {
      const findAQuery = 'SELECT * FROM usersTable WHERE id=$1';
      const updateAQuery =`UPDATE userTables
        SET id=$1,email=$2,password=$3,first_name=$4
        WHERE id=$5 returning *`;
      try {
        const { rows } = await db.query(findAQuery, [req.params.id]);
        if(!rows[0]) {
          return res.status(404).json({'message': 'user not found'});
        }
        const inputs = [
          req.body.id || rows[0].id,
          req.body.email || rows[0].email,
          req.body.password || rows[0].password,
          req.params.id
        ];
        const response = await db.query(updateAQuery, inputs);
        return res.status(200).json(response.rows[0]);
      } catch(err) {
        return res.status(400).json(err);
      }
    },
    
    async delete(req, res) {
      const deleteAQuery = 'DELETE FROM usersTable WHERE id=$1 returning *';
      try {
        const { rows } = await db.query(deleteAQuery, [req.params.id]);
        if(!rows[0]) {
          return res.status(404).json({'message': 'user not found'});
        }
        return res.status(204).json({ 'message': ' user deleted' });
      } catch(error) {
        return res.status(400).json(error);
      }
    }
  }
  
  export default user;