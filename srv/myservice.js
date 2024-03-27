const { foreach } = require("@sap/cds");

module.exports = (srv) => {

    srv.on('vendors', (req,res) =>  {

        var aVendors = [{
            "vendorId" : 1,
            "name" : "SAP"
        },
        {
            "vendorId" : 2,
            "name" : "IBM"
        },
        {
            "vendorId" : 3,
            "name" : "Wipro"
        }]
        for (let index = 0; index < aVendors.length; index++) {
            const element = aVendors[index];
            if (element.vendorId == req.data.vendorId) {
                return element.name;
            }
        }
    })

}