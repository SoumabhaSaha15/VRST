
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { LuArrowUpRight } from "react-icons/lu";
import { Separator } from "@/components/ui/separator"
import { createFileRoute } from '@tanstack/react-router';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const stack = [
  {
    name: "Vite",
    description: "Fast frontend tooling",
    icon: "/vite.svg",
    href: "https://vite.dev",
  },
  {
    name: "React",
    description: "Modern UI development",
    icon: "/react.svg",
    href: "https://react.dev",
  },
  {
    name: "shadcn/ui",
    description: "Accessible UI components",
    icon: "/shadcn.png",
    href: "https://ui.shadcn.com",
  },
  {
    name: "TanStack",
    description: "Powerful application primitives",
    icon: "/tanstack.svg",
    href: "https://tanstack.com",
  },
]

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-5xl shadow-none">
        <CardHeader className="space-y-8">
          <div className="flex items-center justify-between">
            <Badge variant="outline">VRST</Badge>

            <Badge variant="secondary">
              React Template
            </Badge>
          </div>

          <Separator />

          <div className="space-y-4 py-8 text-center">
            <Badge variant="outline">
              Vite + React + shadcn + TanStack
            </Badge>

            <CardTitle className="text-4xl tracking-tight sm:text-5xl">
              Welcome to VRST
            </CardTitle>

            <p className="mx-auto max-w-xl text-muted-foreground">
              A modern React starter template with a carefully selected
              development stack, ready for your next project.
            </p>

            <div className="flex justify-center gap-3 pt-2">
              <Button>
                Get started
              </Button>

              <Button variant="outline">
                Documentation
                <LuArrowUpRight />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Separator />

          <div className="space-y-1">
            <h2 className="text-sm font-medium">
              Technology stack
            </h2>

            <p className="text-sm text-muted-foreground">
              Everything included in the template.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((item) => (
              <Card
                key={item.name}
                className="group transition-colors hover:bg-muted/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex size-10 items-center justify-center rounded-md border bg-background p-2">
                      <img
                        src={item.icon}
                        alt=""
                        className="size-full object-contain"
                      />
                    </div>

                    <LuArrowUpRight
                      className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>

                  <CardTitle className="text-base">
                    {item.name}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
