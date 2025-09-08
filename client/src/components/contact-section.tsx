import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      parentName: "",
      phone: "",
      email: "",
      childName: "",
      gradeLevel: "",
      message: "",
    },
  });

  const createInquiry = useMutation({
    mutationFn: (data: InsertContactInquiry) =>
      apiRequest("POST", "/api/contact-inquiries", data),
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pela sua mensagem! Entraremos em contato em breve.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact-inquiries"] });
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: InsertContactInquiry) {
    createInquiry.mutate(values);
  }

  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground">
            Estamos prontos para responder às suas perguntas sobre matrículas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Localização</h4>
                  <p className="text-muted-foreground" data-testid="contact-address">
                    Rua Principal, Bairro Miramar<br />
                    Luanda, Angola
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-secondary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefone</h4>
                  <p className="text-muted-foreground" data-testid="contact-phone">
                    +244 923 456 789<br />
                    +244 912 345 678
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground" data-testid="contact-email">
                    info@colegiomara.ao<br />
                    matriculas@colegiomara.ao
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                  <p className="text-muted-foreground" data-testid="contact-hours">
                    Segunda a Sexta: 7h00 - 17h00<br />
                    Sábado: 8h00 - 12h00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors"
                  data-testid="social-facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors"
                  data-testid="social-instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors"
                  data-testid="social-youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Solicitar Informações sobre Matrículas
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="parentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome do Responsável</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Seu nome completo" 
                                {...field} 
                                data-testid="input-parent-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="Seu número de telefone" 
                                {...field}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Seu email" 
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="childName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome da Criança</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Nome do filho(a)" 
                                {...field}
                                data-testid="input-child-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="gradeLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nível de Ensino</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-grade-level">
                                  <SelectValue placeholder="Selecionar nível" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="infantil">Educação Infantil</SelectItem>
                                <SelectItem value="primario">Ensino Primário</SelectItem>
                                <SelectItem value="secundario">Ensino Secundário</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Conte-nos sobre as necessidades específicas ou perguntas que tem..."
                              className="h-32"
                              {...field}
                              value={field.value || ""}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-secondary"
                      disabled={createInquiry.isPending}
                      data-testid="button-submit"
                    >
                      {createInquiry.isPending ? "Enviando..." : "Enviar Solicitação"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
