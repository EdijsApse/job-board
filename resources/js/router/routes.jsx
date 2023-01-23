import dashboardRoutes from "./routes/dashboard";
import publicRoutes from "./routes/public";

export default [{ ...dashboardRoutes }, { ...publicRoutes }];
