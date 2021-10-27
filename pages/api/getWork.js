import { myAirtable, minifyRecords } from "../../utils/Airtable";




export default async (req, res) => {
    try{

        const records = await myAirtable(process.env.AIRTABLE_TABLE_WORK_NAME)
        .select({ view: "Grid view" })
        .firstPage();

        const minifiedRecords = minifyRecords(records);
        res.status(200).json([...minifiedRecords]);
    }catch(err){
        res.status(500).json({ msg: 'Something went wrong'});
    }
}