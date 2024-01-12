import { Request, Response, NextFunction } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'


class CreateProductController{
    async handle(req: Request, res: Response, next: NextFunction){

        const { name, price, description, category_id } = req.body;

        const createProductService = new CreateProductService();

        if(!req.file){
            // throw new Error('Falha no envio da imagem');
            console.log('falha no envio da imagem');
            next();
        }else{

            const { originalname, filename: banner } = req.file;

    
                const product = await createProductService.execute({
                    name,
                    price,
                    description,
                    banner,
                    category_id
                });

                return res.json(product);
        }
        
    }
}


export { CreateProductController }