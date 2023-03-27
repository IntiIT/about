export const load = async ({locals, cookies}) => {
    const contacts = {
        phone: "+7 (904) 221 38 18",
        email: "efim-02@mail.ru",
        telegram: "",
    }

    const socLinks = [
        {
            name: "vk",
            link: "vk.com"
        }
    ]

    const aboutTextEndingList = [
        "команда профессионалов",
        "современные технологии",
        "понимание бизнес процессов",
        "надежные решения",
        "масштабируемые системы"
    ]

    const officeCoords = {
        lat: 56.149045,
        lon: 47.2194552,
    }

    return {
        contacts: contacts,
        socLinks: socLinks,
        aboutTextEndingList: aboutTextEndingList,
        officeCoords: officeCoords
    }
}