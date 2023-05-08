import { Box, Table, Tbody, Td, Thead, Tr ,Text, Th, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { IsMobile } from "../context"
import { AnnualTripRecordsTotal, MonthlyTripRecords } from "../dummy"
import { DataBox } from "./DataBox"



export const MonthlyTripRecordsTable= () => {

    const isMobile = useContext(IsMobile);

    const month = 5;

    const monthlyTripRecords = MonthlyTripRecords;

    return<Box>
        {monthlyTripRecords !== null &&
            <Box overflowX={"scroll"} pt = {"25px"} pb = {"60px"}>
                <Table variant={"simple"} size={"sm"} minW = {isMobile ? "450px" : "700px"}>
                    <Thead>
                        <Tr>
                            <Th>
                                
                            </Th>
                            <Th>
                                燃料費
                            </Th>
                            <Th>
                                消費量
                            </Th>
                            <Th>
                                走行距離
                            </Th>
                            <Th>
                                記録日時
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {monthlyTripRecords.tripRecords.map((tr) => {
                            return<Tr>
                                <Td>
                                    del
                                </Td>
                                <Td color={"red"}>
                                    ¥{tr.totalYen.toFixed(1)}
                                </Td>
                                <Td>
                                    {tr.totalLiter.toFixed(0)}L
                                </Td>
                                <Td>
                                    {tr.totalKilometers.toFixed(1)}km
                                </Td>
                                <Td>
                                    {tr.createdAt}
                                </Td>
                            </Tr>
                        })}
                    </Tbody>
                </Table>
            </Box>
        }
    </Box>
}