//busqueda lineal mejorada 

#include <iostream>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

using namespace std;

int main ()
{
	int a[]= (1,2,2,4,6,8,91,9,8,8,9,9);
	int i,b,n,opc;
	int cont =0;
	n=13
	do
	{
	system ("cls");
	
	cout<< "dame el valor que deseas buscar";
	cin>>b;
	
		for (i=0; i<n; i++)
		{
			
			if(a[i] ==b)
			{
				cout ++;
			}
			
		if(cont>0)
		{
	
				cout<<"\n\n sea encontrado el valor :  "<<b<<",  se encontro un total de : "<<cont<<" veces " ;
		}
		if(cont ==0)
		
				
		{
				cout<<"\n no sea podido encontrar el valor";
				
		}
		
		cout<< "\n deseas repetir el programa de nuevo?   (si  =  1;   no = 0)  ";
		cin>>opc;
		cont=0;
	}
	while (opc ==1);
	
	return 0;
}
