

const utility_functions = {

    timeSince: timestamp => {
        const minutes = new Date(Date.now() - Date.parse(timestamp)) / 1000 / 60;

        const days = Math.floor(minutes / 60 / 24);
        if (days >= 1)
            return `${days}${days == 1 ? ' day' : ' days'} ago!`
        const hours = Math.floor(minutes / 60);
        if (hours >= 1)
            return `${hours}${hours == 1 ? ' hour' : ' hours'} ago!`
        if (minutes >= 1)
            return `${minutes}${minutes == 1 ? ' minute' : ' minutes'} ago!`
        
        return 'less than a minute ago!';
    }

}

module.exports = utility_functions;