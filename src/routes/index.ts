import { Router } from "express";
import bicycleRoutes from "../modules/bicycles/bicycle.routes";
import BrandsRoutes from "../modules/brands/brand.routes";


const router = Router();

router.use("/bicycles", bicycleRoutes);
router.use("/brand", BrandsRoutes);

export default router;