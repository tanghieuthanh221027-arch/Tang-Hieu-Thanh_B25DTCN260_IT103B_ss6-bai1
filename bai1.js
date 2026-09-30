let choice;
let orderCode = "";
let isValidCode = false;
let items = [];

do {
    choice = Number(prompt(`
    Gym Fitness
    1. Nhập và chuẩn hóa mã đơn hàng
    2. Tính tiền và in hóa đơn
    3. Thoát

    Mời bạn nhập lựa chọn :  
    `));

    switch(choice){
        case 1:
            orderCode = prompt("Nhập mã đơn hàng : ")
                .trim()
                .toUpperCase();

            if (orderCode.length < 8) {
                console.log("Mã đơn hàng tối thiểu 8 kí tự");
                isValidCode = false;
                break;
            }

            if (!orderCode.startsWith("GYM-")) {
                console.log("Mã đơn hàng phải bắt đầu bằng GYM-");
                isValidCode = false;
                break;
            }

            items = orderCode.slice(4).split("-");

            isValidCode = true;

            console.log(`Mã hợp lệ : ${orderCode}`);
            break;

        case 2 : 
            if (!isValidCode){
                console.log("Nhập mã đơn hàng hợp lệ trước")
                break;
            }

            let total = 0;

            console.log("\n" + "-".repeat(40));
            console.log("FITNESS GYM - HÓA ĐƠN");
            console.log("-".repeat(40));

            console.log(
                "Sản phẩm".padEnd(15) +
                "SL".padStart(5) +
                "Đơn giá".padStart(12)
            );

            console.log("-".repeat(40));

            for (let item of items){
                let productName = "";
                let price = 0;

                if (item === "SHAKER"){
                    productName = "Bình lắc";
                    price = 120000;
                } else if(item === "GLOVES"){
                    productName = "Găng tay";
                    price = 180000;
                } else if (item === "STRAP"){
                    productName = "Dây kéo lưng";
                    price = 150000;
                } else {
                    console.log("Mã phụ kiện không hợp lệ:", item);
                    continue;
                }

                console.log(
                    productName.padEnd(15) +
                    "1".padStart(5) +
                    price.toLocaleString("vi-VN").padStart(12)
                );

                total += price;
            }

            let vip = prompt("Khách có thẻ VIP? (Y/N): ") .trim() .toUpperCase();

            let discount = 0;

            if (vip === "Y") {
                discount = total * 0.1;
            }

            let finalTotal = total - discount;

            console.log("-".repeat(40));

            console.log( "Tạm tính:".padEnd(25) + total.toLocaleString("vi-VN").padStart(15) + " VNĐ" );

            console.log( "Giảm giá:".padEnd(25) + discount.toLocaleString("vi-VN").padStart(15) + " VNĐ" );

            console.log( "THANH TOÁN:".padEnd(25) + finalTotal.toLocaleString("vi-VN").padStart(15) + " VNĐ" );

            console.log("-".repeat(40));
            break;

        case 3:
            console.log("Đã thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }
}while(choice != 3)