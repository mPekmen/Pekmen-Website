export default async(req, res) => { 
    const project = [
        
        {
            "name": "pekmen.net",
            "link": "https://cdn.discordapp.com/attachments/933792370049319022/1070756693656469545/image.png",
            "description": "website",
            "html_url": "https://pekmen.net"
        },

        

    ]
    res.status(200).json(project)
}
