import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "../auth/[...nextauth]/auth";

export async function GET() {
    const session = await getServerSession(authOptions);

    return NextResponse.json({
        name: session?.user?.name ?? "Not Logged In"
    });
}
