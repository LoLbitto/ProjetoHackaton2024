export default async function handler(req, res) {
    if (req.method === 'POST') {

        try {
            const response = await fetch("http://localhost:8080/api/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            });

            if (!response.ok) {
                const errorData = await response.json();
                return res.status(response.status).json(errorData);
            }

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: "Não foi possível se conectar ao servidor" });
        }
    } else {
        res.status(405).json({ error: "Método não permitido" });
    }
}
