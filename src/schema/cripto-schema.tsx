import { z } from "zod"

const CryptoCurrencyResponseSchema = z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Name: z.string()
        })
    });


const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);

const CryptoCompareResponseSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
});


export {
    CryptoCurrencyResponseSchema,
    CryptoCurrenciesResponseSchema,
    CryptoCompareResponseSchema
}