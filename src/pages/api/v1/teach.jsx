export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
            "name": "CSS",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
            "name": "Illustrator CC",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
        },

    ]
    res.status(200).json(techs)
}
