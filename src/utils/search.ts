export default function search(
  data: { 
    id: number;
    InstanceId: string,
    ConsumedQuantity: string,
    Cost: string,
    Date: string,
    MeterCategory: string,
    ResourceGroup: string,
    ResourceLocation: string,
    Tags: {
      [key: string]: string;
    },
    UnitOfMeasure: string,
    Location: string,
    ServiceName: string
   }[],
  value: string
) {
  return data.filter((item) => {
    const tags = item;
    return (
      tags &&
      (tags["Tags"]["app-name"] === value ||
        tags["Tags"]["environment"] === value ||
        tags["Tags"]["business-unit"] === value)
    );
  });
}