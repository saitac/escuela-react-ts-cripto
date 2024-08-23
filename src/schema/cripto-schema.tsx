import { z } from "zod"

const CryptoCurrencyResponseSchema = z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Name: z.string()
        })
    });


const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);


export {
    CryptoCurrencyResponseSchema,
    CryptoCurrenciesResponseSchema
}