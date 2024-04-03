export const bytesToPiB = (bytes) => {
    const PiB = bytes / Math.pow(2, 50);
    return PiB.toFixed(2)
}

export const bytesToTiB = (bytes) => {
    const TiB = bytes / Math.pow(2, 40);
    return TiB.toFixed(2);
}

export const convertToFil = (number) => {
   let result = (number / Math.pow(10, 18)).toFixed(4);

   const [integerPart, decimalPart] = result.split('.');

   const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   result = `${formattedInteger}.${decimalPart}`;

   return result;
}

export const formatTimestampYYYYMMDD = (timestamp, locale = 'en-US') => {
    if (timestamp === undefined) {
        return 'Invalid Timestamp';
    }

    const date = new Date(timestamp * 1000);
    
    if (isNaN(date.getTime())) {
        return 'Invalid Date';
    }

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}; 

export const formatTimestampYYYYMMDDHHMMSS = (timestamp, locale = 'en-US') => {
    if (timestamp === undefined) {
        return 'Invalid Timestamp';
    }

    const date = new Date(timestamp * 1000);
    
    if (isNaN(date.getTime())) {
        return 'Invalid Date';
    }

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
