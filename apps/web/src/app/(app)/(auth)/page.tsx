import Image from "next/image";
import LoginForm from "@/components/auth/login-form";

import { Card, CardContent, CardHeader } from "@energyleaf/ui";

export default function Page() {
    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <div className="flex flex-row items-center justify-center gap-2">
                    <Image
                        alt="Energyleaf Logo"
                        className="h-16 w-16"
                        height={499}
                        src="/image/logo/logo.png"
                        width={499}
                    />
                    <h1 className="text-4xl">Energyleaf</h1>
                </div>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    );
}
