import { Box, Table, Tbody, Td, Thead, Tr ,Text, Th, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { IsMobile, Month } from "../context"
import { AnnualTripRecordsTotal, MonthlyTripRecords } from "../dummy"
import { DataBox } from "./DataBox"



export const MonthlyTripRecordsTable= () => {

    const isMobile = useContext(IsMobile);

    const month = useContext(Month);

    const monthlyTripRecords = MonthlyTripRecords;

    const getPurposeNameElement = (purposeName) => {
        if(purposeName === "BUSINESS")return<Text>
            業務
        </Text>

        return<Text>
            プライベート
        </Text>
    }

    return<Box>
        {monthlyTripRecords !== null &&
            <Box overflowX={"scroll"} pt = {"25px"} pb = {"60px"}>
                <Table variant={"simple"} size={"sm"} minW = {isMobile ? "550px" : "1000px"}>
                    <Thead>
                        <Tr>
                            <Th>
                                
                            </Th>
                            <Th>
                                記録日時
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
                                使用目的
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {monthlyTripRecords.tripRecords.map((tr) => {
                            return<Tr>
                                <Td>
                                    
                                </Td>
                                <Td>
                                    {tr.createdAt}
                                </Td>
                                <Td color={"red"}>
                                    ¥{tr.totalYen.toFixed(1)}
                                </Td>
                                <Td>
                                    {tr.totalLiter.toFixed(1)}L
                                </Td>
                                <Td>
                                    {tr.totalKilometers.toFixed(1)}km
                                </Td>
                                <Td>
                                    {getPurposeNameElement(tr.purposeName)}
                                </Td>
                            </Tr>
                        })}
                    </Tbody>
                </Table>
            </Box>
        }
    </Box>
}