import { asyncHandler } from "../utils/asyncHandler.js";

// when import like this { ..} then export of that fun or file shoule not be default { ...} -> {....}
//and when import xyz than export of xyz should be default


const registerUser = asyncHandler(async (rqq , res ) => {
    res.status(200).json({
        message : "deepak"
    })
})


export {registerUser}

