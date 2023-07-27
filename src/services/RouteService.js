export class RouteService {
  static async getRoutes() {
    const routes = await fetch(
      "https://64c22aa1fa35860baea147c1.mockapi.io/routes"
    );
    return routes.json();
  }
}
