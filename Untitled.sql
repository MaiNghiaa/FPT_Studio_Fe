use project1;

create table Products(
	ProductID int primary key auto_increment,
    product_name varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


create table Color(
	ColorId int primary key auto_increment,
    color_name varchar(255),
    color varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table Rom(
	RomId int primary key auto_increment,
    rom_name varchar(255),
    romvalue int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table Product_Detail(
ProductDetailId int primary key auto_increment,
 id_Product int ,
 screen varchar(255),
 camera_sau varchar(255),
 camera_selfie varchar(255),
 Ram varchar(255),
 DungLuongPin int,
 TheSim varchar(255),
 HĐH varchar(255),
 XuatXu varchar(255),
 Thoigianramat time,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 );



create table Pricing(
PricingId int primary key auto_increment,
 ProductID int,
 ColorId int,
 RomId int,
 Price int,
 FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (ColorId) REFERENCES Color(ColorId),
    FOREIGN KEY (RomId) REFERENCES Rom(RomId)
    );
    
    
create table Images (
    ImageID INT PRIMARY KEY,
    ImageURL VARCHAR(255),
    Description TEXT,
    ProductID INT,
    ColorID int,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
 FOREIGN KEY (ColorID) REFERENCES Color(ColorId)
 )


    
    
