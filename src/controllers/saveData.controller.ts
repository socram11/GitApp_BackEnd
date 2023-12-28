import { Request, Response } from 'express';
import User from '../schemas/user.schema';
import Repo from '../schemas/repo.schema';

export const saveGitHubData = async (req: Request, res: Response) => {
  try {
    const { dataType, githubData } = req.body;

    console.log('Incoming data:', dataType, githubData);


    let newEntity;
    if (dataType === 'user') { 
      newEntity = new User(githubData);
    } else if (dataType === 'repo') {
      newEntity = new Repo(githubData);
    } else {
      throw new Error('Invalid data type'); 
    }

    await newEntity.save();

    console.log('Saved entity data:', newEntity);


    res.json({ message: 'Data successfully saved!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};