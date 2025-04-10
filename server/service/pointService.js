function calculatePoints(receipt){
    let points = 0;

    //one point for every alphanumeric character in the retailer name
    const alphanumeric = receipt.retailer.match(/[a-z0-9]/gi) || [];
    points += alphanumeric.length;

    //50 points if the total is a round dollar amount
    if (receipt.total.endsWith('.00')){
        points += 50;
    }
    //25 points if the total is a multiple of .25
    if (parseFloat(receipt.total) % 0.25 === 0 ){
        points += 25;
    }
    //5 points for every 2 items 
    points += Math.floor(receipt.items.length /2) * 5;

    //If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned.
    for (const item of receipt.items){
        const description = item.shortDescription.trim();
        if (description.length % 3 === 0){
            const price = parseFloat(item.price);
            points += Math.ceil(price * 0.2);
        }
    }

    //6 points if the day in the purchase date is odd.
    const date = Number(receipt.purchaseDate.split("-")[2]);
    if (date % 2 === 1){
        points += 6;
    }

    //10 points if the time of purchase is after 2:00pm and before 4:00pm.
    const [hourString, minString] = receipt.purchaseTime.split(":");   
    const hour = Number(hourString);
    const min = Number(minString);

    if ((hour === 14 && min > 0) || hour === 15){
        points += 10;
    }

    return points;
};

module.exports = calculatePoints;