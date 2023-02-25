import images from "./images"

const data = {
    user: {
        name: 'User',
        img: images.avt
    },
    summary: [
        {
            title: 'Games Remaining',
            subtitle: 'Total games today',
            value: '25',
            percent: 70
        },
        {
            title: 'Participants',
            subtitle: 'Total Participants today',
            value: '3000',
            percent: 49
        },
        {
            title: 'Giveaway',
            subtitle: 'Total giveaway today',
            value: '$678',
            percent: 38
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Participants',
        value: '678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '30K',
            title: 'Games Held'
        },
        {
            value: '9.876K',
            title: 'Participants'
        },
        {
            value: '1.234K',
            title: 'Tournament Visits'
        },
        {
            value: '$5000',
            title: 'Player Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data