import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const registerSchema = z.object({
  username: z.string().trim().min(1, { message: "Nome de usuário é obrigatório" }),
  email: z.string().trim().min(1, { message: "Email é obrigatório" }).email({ message: "Email inválido" }),
  password: z.string().trim().min(1, { message: "Senha é obrigatória" }).trim().min(1, { message: "Senha é obrigatória" }).min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});

const loginSchema = z.object({
  email: z.string().trim().min(1, { message: "Email é obrigatório" }).email({ message: "Email inválido" }),
  password: z.string().trim().min(1, { message: "Senha é obrigatória" }).min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});
const AuthenticationPage = () => {

// 1. Define your form.
const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log(data);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Faça login para continuar.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6"></CardContent>
            <CardFooter>
              <Button className="w-full">Entrar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Criar conta</CardTitle>
              <CardDescription>Crie uma conta para continuar.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6"></CardContent>
            <CardFooter>
              <Button className="w-full">Criar conta</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
