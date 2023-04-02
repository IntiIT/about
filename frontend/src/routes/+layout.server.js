import {
    PUBLIC_CONTACTS_PHONE,
    PUBLIC_CONTACTS_EMAIL,
    PUBLIC_CONTACTS_TELEGRAM,
    PUBLIC_CONTACTS_GITHUB,
    PUBLIC_OFFICE_COORDS_LAT,
    PUBLIC_OFFICE_COORDS_LON
} from "$env/static/public";

export const load = async ({locals, cookies}) => {
    const contacts = {
        phone: PUBLIC_CONTACTS_PHONE,
        email: PUBLIC_CONTACTS_EMAIL,
        telegram: PUBLIC_CONTACTS_TELEGRAM,
    }

    const socLinks = [
        {
            name: "GitHub",
            link: PUBLIC_CONTACTS_GITHUB
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
        lat: PUBLIC_OFFICE_COORDS_LAT,
        lon: PUBLIC_OFFICE_COORDS_LON,
    }

    return {
        contacts: contacts,
        socLinks: socLinks,
        aboutTextEndingList: aboutTextEndingList,
        officeCoords: officeCoords
    }
}
